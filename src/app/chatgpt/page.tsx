import { QuantitySelector } from '../../components/QuantitySelector';

export default function ChatGPTPage() {
  return (
    <section style={{ paddingTop: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        ChatGPT 5.2 Accounts
      </h1>
      <p style={{ maxWidth: 600, color: '#cbd5f5', marginBottom: '1.5rem' }}>
        Power your team with ChatGPT 5.2 accounts for content, coding, research and automation.
        CyberZed sells only in bulk to give you the best price.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        <div style={{ borderRadius: '1rem', border: '1px solid #1f2937', background: '#020617', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Wholesale Pricing</h2>
          <p style={{ color: '#e5e7eb', marginBottom: '0.75rem' }}>
            ChatGPT 5.2 – <strong>$2 per account / 1 year</strong> – minimum 5 accounts.
          </p>
          <ul style={{ fontSize: '0.9rem', color: '#9ca3af', paddingLeft: '1.2rem' }}>
            <li>Ideal for agencies, teams and resellers.</li>
            <li>Instant delivery after payment.</li>
            <li>Accounts details in your dashboard and by email.</li>
          </ul>
        </div>

        <div style={{ borderRadius: '1rem', border: '1px solid #1f2937', background: '#020617', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Use cases</h2>
          <ul style={{ fontSize: '0.9rem', color: '#9ca3af', paddingLeft: '1.2rem' }}>
            <li>Content writing and translations.</li>
            <li>Coding help and debugging.</li>
            <li>Business research and idea generation.</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}
