import { NextRequest, NextResponse } from 'next/server';
import * as cd from '@/lib/consumerdirect';

type Params = { params: Promise<{ action: string }> };

export async function POST(req: NextRequest, { params }: Params) {
  try {
    const { action } = await params;
    const body = await req.json().catch(() => ({}));
    const { trackingToken, customerToken, ...data } = body;

    let result: unknown;

    switch (action) {
      case 'start':
        result = await cd.startEnrollment(data.pid);
        break;

      case 'validate-email':
        result = await cd.validateEmail(trackingToken, data.email);
        break;

      case 'validate-sponsor-code':
        result = await cd.validateSponsorCode(trackingToken, data.sponsorCode);
        break;

      case 'create-customer':
        result = await cd.createCustomer(trackingToken, data);
        break;

      case 'validate-ssn':
        result = await cd.validateSSN(trackingToken, customerToken, data.ssn);
        break;

      case 'set-identity':
        result = await cd.setIdentity(trackingToken, customerToken, data);
        break;

      case 'verify-identity':
        result = await cd.verifyIdentity(trackingToken, customerToken, {
          referenceNumber: data.referenceNumber,
          answers: data.answers,
        });
        break;

      case 'set-member-plan':
        result = await cd.setMemberPlan(
          trackingToken,
          customerToken,
          data.planId,
        );
        break;

      case 'validate-credit-card':
        result = await cd.validateCreditCard(trackingToken, customerToken, data);
        break;

      case 'complete':
        result = await cd.completeEnrollment(
          trackingToken,
          customerToken,
          data.creditCardToken,
        );
        break;

      case 'login-code':
        result = await cd.getLoginCode(trackingToken, customerToken);
        break;

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 },
        );
    }

    return NextResponse.json(result);
  } catch (err: any) {
    console.error('[signup API]', err);
    return NextResponse.json(
      { error: err.message || 'Internal error' },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { action } = await params;
    const url = new URL(req.url);
    const trackingToken = url.searchParams.get('trackingToken') || '';
    const customerToken = url.searchParams.get('customerToken') || '';

    let result: unknown;

    switch (action) {
      case 'campaign-details':
        result = await cd.getCampaignDetails(trackingToken);
        break;

      case 'get-questions':
        result = await cd.getQuestions(trackingToken, customerToken);
        break;

      case 'security-questions':
        result = await cd.getSecurityQuestions(trackingToken);
        break;

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 },
        );
    }

    return NextResponse.json(result);
  } catch (err: any) {
    console.error('[signup API]', err);
    return NextResponse.json(
      { error: err.message || 'Internal error' },
      { status: 500 },
    );
  }
}
