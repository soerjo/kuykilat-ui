// public api client

type RequestOptions = {
  body?: string;
  headers?: Record<string, string>;
};

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api') {
    this.baseUrl = baseUrl;
  }

  private buildUrl(endpoint: string): string {
    if (endpoint.startsWith(this.baseUrl)) return endpoint;
    return `${this.baseUrl}${endpoint}`;
  }

  private async parseResponse<T>(response: Response): Promise<T | undefined> {
    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return undefined;
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      await response.text().catch(() => '');
      return undefined;
    }

    const text = await response.text().catch(() => '');
    if (!text) return undefined;

    try {
      return JSON.parse(text) as T;
    } catch {
      return undefined;
    }
  }

  private async parseErrorMessage(response: Response): Promise<string> {
    const text = await response.text().catch(() => '');
    if (!text) {
      return response.statusText || `Request failed with status ${response.status}`;
    }
    try {
      const body = JSON.parse(text) as { message?: unknown; error?: unknown };
      const message = body.message ?? body.error;
      if (typeof message === 'string' && message) {
        return message;
      }
    } catch {
      return text;
    }
    return text;
  }

  async request<T>(endpoint: string, options: RequestInit & RequestOptions = {}): Promise<T> {
    const { body, headers: customHeaders, ...rest } = options;

    const response = await fetch(this.buildUrl(endpoint), {
      ...rest,
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders,
      },
      body,
    });

    if (response.ok) {
      const data = await this.parseResponse<T>(response);
      return data as T;
    }

    throw new ApiError(response.status, await this.parseErrorMessage(response));
  }

  get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  put<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiClient = new ApiClient();
