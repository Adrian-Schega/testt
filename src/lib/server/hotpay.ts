import { env } from '$env/dynamic/private';

export interface HotPayPaymentRequest {
  amount: number;
  currency: string;
  orderId: string;
  description: string;
  customerEmail?: string;
  returnUrl: string;
  notificationUrl: string;
}

export interface HotPayPaymentResponse {
  id: string;
  status: string;
  redirectUrl: string;
  amount: number;
  currency: string;
}

/**
 * HotPay.pl payment gateway integration
 */
export class HotPayService {
  private apiKey: string;
  private secret: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = env.HOTPAY_API_KEY || 'test-api-key';
    this.secret = env.HOTPAY_SECRET || 'test-secret';
    this.baseUrl = env.HOTPAY_ENVIRONMENT === 'production' 
      ? 'https://api.hotpay.pl' 
      : 'https://api-sandbox.hotpay.pl';
  }

  /**
   * Create payment
   */
  async createPayment(request: HotPayPaymentRequest): Promise<HotPayPaymentResponse> {
    const payload = {
      amount: request.amount,
      currency: request.currency,
      order_id: request.orderId,
      description: request.description,
      customer_email: request.customerEmail,
      return_url: request.returnUrl,
      notification_url: request.notificationUrl,
      api_key: this.apiKey
    };

    const response = await fetch(`${this.baseUrl}/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HotPay API error: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Get payment status
   */
  async getPaymentStatus(paymentId: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`HotPay API error: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: string, signature: string): boolean {
    // Implementation depends on HotPay's webhook signature verification
    // This is a placeholder implementation
    return true;
  }
}

export const hotpay = new HotPayService();