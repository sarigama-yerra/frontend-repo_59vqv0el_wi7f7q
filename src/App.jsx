import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedGallery from "./components/AnimatedGallery";
import FlipBookMenu from "./components/FlipBookMenu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-pink-900">
      <Navbar />
      <main>
        <Hero />
        <FlipBookMenu />
        <AnimatedGallery />
        <Reviews />
        <Contact />
        <footer className="py-10 border-t border-pink-200 text-center text-sm text-pink-700/80">
          © {new Date().getFullYear()} ohmycupcakebakehouse — baked with love
        </footer>
      </main>
    </div>
  );
}

export default App;
