import Footer from '../components/layout/Footer';

export default function Home(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-full row items-center justify-center flex-grow">
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
