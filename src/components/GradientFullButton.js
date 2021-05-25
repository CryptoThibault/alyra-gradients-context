const GradientFullButton = () => {
  const gradientId = 2 //usereducer
  return (
    <div className="mt-3">
      <a className="btn btn-outline-dark w-100" href={`/gradient/:${gradientId}`}>Plein écran</a>
    </div>
  );
};

export default GradientFullButton;