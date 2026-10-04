import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface NewInquiryProps {
  fullName?: string
  workEmail?: string
  companyName?: string
  selectedService?: string
  businessAndChallenge?: string
  sourceService?: string
  sourcePage?: string
  submittedAt?: string
}

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '28px 26px', maxWidth: '640px' }
const heading = { fontSize: '20px', color: '#111827', margin: '0 0 4px' }
const sub = { fontSize: '13px', color: '#6b7280', margin: '0 0 20px' }
const sectionTitle = {
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: '#4338ca',
  margin: '20px 0 8px',
  fontWeight: 700,
}
const label = { fontSize: '12px', color: '#6b7280', margin: '0' }
const value = { fontSize: '14px', color: '#111827', margin: '0 0 12px', whiteSpace: 'pre-line' as const }
const hr = { borderColor: '#e5e7eb', margin: '8px 0 0' }

const Row = ({ k, v }: { k: string; v?: string | undefined }) => (
  <Section>
    <Text style={label}>{k}</Text>
    <Text style={value}>{v && v.trim() ? v : '—'}</Text>
  </Section>
)

const Email = (p: NewInquiryProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New enquiry from ${p.fullName || 'a visitor'}${p.companyName ? ` — ${p.companyName}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New enquiry received</Heading>
        <Text style={sub}>
          {p.submittedAt ? `Submitted ${p.submittedAt}` : 'Submitted via digitalymarket.com'}
        </Text>
        <Hr style={hr} />

        <Text style={sectionTitle}>About them</Text>
        <Row k="Full name" v={p.fullName} />
        <Row k="Work email" v={p.workEmail} />
        <Row k="Company" v={p.companyName} />
        <Row k="Selected service" v={p.selectedService} />
        <Row k="Business and challenge" v={p.businessAndChallenge} />

        <Text style={sectionTitle}>Source context</Text>
        <Row k="Source service" v={p.sourceService} />
        <Row k="Source page" v={p.sourcePage} />
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New enquiry — ${data['companyName'] || data['fullName'] || 'DigitalyMarket'}`,
  displayName: 'New inquiry notification',
  to: 'mohammad@digitalymarket.com',
  previewData: {
    fullName: 'Jane Doe',
    workEmail: 'jane@example.com',
    companyName: 'Northline Manufacturing',
    selectedService: 'Website',
    businessAndChallenge: 'B2B components supplier looking to improve qualified enquiries.',
    sourceService: 'Website',
    sourcePage: '/services/web-creation',
    submittedAt: '25 Aug 2026, 17:20 UTC',
  },
} satisfies TemplateEntry
