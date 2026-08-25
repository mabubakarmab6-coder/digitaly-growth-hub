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
  country?: string
  companyName?: string
  categories?: string
  links?: string
  businessDescription?: string
  painPoints?: string
  challenges?: string
  outcomes?: string
  timeline?: string
  budgetAllocated?: string
  budgetRange?: string
  additionalContext?: string
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

const Row = ({ k, v }: { k: string; v?: string }) => (
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
        <Row k="Country" v={p.country} />

        <Text style={sectionTitle}>Their business</Text>
        <Row k="Company" v={p.companyName} />
        <Row k="Business type" v={p.categories} />
        <Row k="Online presence" v={p.links} />
        <Row k="About the business" v={p.businessDescription} />
        <Row k="Challenges in their words" v={p.painPoints} />

        <Text style={sectionTitle}>Their challenge</Text>
        <Row k="Challenges" v={p.challenges} />
        <Row k="Desired outcomes" v={p.outcomes} />

        <Text style={sectionTitle}>Their project</Text>
        <Row k="Timeline" v={p.timeline} />
        <Row k="Budget allocated" v={p.budgetAllocated} />
        <Row k="Budget range" v={p.budgetRange} />
        <Row k="Additional context" v={p.additionalContext} />
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
    country: 'United Kingdom',
    companyName: 'Northline Manufacturing',
    categories: 'Manufacturer / B2B',
    links: 'northline.example.com',
    businessDescription: 'B2B components supplier serving OEMs across Europe.',
    painPoints: 'Enquiries dropped after a website redesign.',
    challenges: 'Generating more qualified leads',
    outcomes: 'More enquiries / leads',
    timeline: '1–3 months',
    budgetAllocated: 'Yes',
    budgetRange: '₹1–3 lakh',
    additionalContext: 'Prefer a call in the mornings.',
    submittedAt: '25 Aug 2026, 17:20 UTC',
  },
} satisfies TemplateEntry
