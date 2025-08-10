export const metadata = {
  title: 'À propos',
  description:
    'Découvrez la vocation de Socialisme en débat et notre charte éditoriale.',
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="font-display text-3xl mb-6">À propos</h1>
      <p className="mb-4">
        <strong>Socialisme en débat</strong> est une plateforme d’analyse et de discussion qui vise à
        diffuser des idées matérialistes et des perspectives révolutionnaires. Nous souhaitons
        contribuer à une compréhension approfondie des enjeux politiques, sociaux et économiques
        contemporains en offrant des articles rigoureux et accessibles.
      </p>
      <p className="mb-4">
        Notre charte éditoriale repose sur l’égalité, la solidarité et l’émancipation collective.
        Les contributions publiées ici cherchent à nourrir le débat socialiste tout en évitant
        l’écueil de l’académisme. Les analyses sont ancrées dans la réalité des luttes et
        s’adressent à celles et ceux qui aspirent à transformer la société.
      </p>
      <p className="mb-4">
        Pour proposer un article ou rejoindre l’équipe, n’hésitez pas à nous contacter via la
        page de contact.
      </p>
    </section>
  );
}