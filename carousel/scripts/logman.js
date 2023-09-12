export default function scrollSlide(){
  const scrollImage() => {
    const element = document.getElementById(`slide-${slideId}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const components = document.querySelectorAll('.slide');
  const componentObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const key = document.getElementById(entry.target.id)?.dataset?.key;
          if (key) {
            setActiveSlide(parseInt(key, 10) + 1);
          }
        }
      });
    },
    { root: document.querySelector('#slides'), threshold: [0.99] }
  );
  components.forEach(comp => {
    componentObserver.observe(comp);
  });

  return () => componentObserver.disconnect();
}
