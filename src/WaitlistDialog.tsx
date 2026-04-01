import { useState, type FormEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

const WAITLIST_MAIL = 'hello@flitops.com'

export function WaitlistDialog() {
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    const subject = encodeURIComponent('Flitops waitlist')
    const body = encodeURIComponent(
      `Please add me to the Flitops waitlist.\n\nEmail: ${trimmed}`,
    )
    window.location.href = `mailto:${WAITLIST_MAIL}?subject=${subject}&body=${body}`
    setOpen(false)
    setEmail('')
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="btn btn--primary">
          Join the waitlist
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content" aria-describedby="waitlist-desc">
          <div className="dialog-header">
            <Dialog.Title className="dialog-title">Join the waitlist</Dialog.Title>
            <Dialog.Close
              type="button"
              className="dialog-close"
              aria-label="Close"
            >
              ×
            </Dialog.Close>
          </div>
          <p id="waitlist-desc" className="dialog-desc">
            We&apos;ll email you when you can try Flitops for your servers and
            Laravel apps.
          </p>
          <form className="dialog-form" onSubmit={handleSubmit}>
            <label className="dialog-label" htmlFor="waitlist-email">
              Email
            </label>
            <input
              id="waitlist-email"
              className="dialog-input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="dialog-actions">
              <Dialog.Close asChild>
                <button type="button" className="btn btn--secondary">
                  Cancel
                </button>
              </Dialog.Close>
              <button type="submit" className="btn btn--primary">
                Continue in email
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
