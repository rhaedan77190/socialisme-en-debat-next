export const metadata = {
  title: 'Contact',
  description: 'Envoyez-nous un message ou abonnez-vous à notre newsletter.',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="font-display text-3xl mb-6">Contact</h1>
      <p className="mb-4">
        Vous souhaitez nous écrire, proposer un article ou poser une question&nbsp;? Utilisez le
        formulaire ci-dessous. Nous vous répondrons dès que possible.
      </p>
      <form
        className="space-y-4"
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Adresse e‑mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}