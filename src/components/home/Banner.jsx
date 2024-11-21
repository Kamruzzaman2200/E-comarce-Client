

const Banner = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/905/586/non_2x/hooded-garment-on-fashion-model-black-background-generated-by-ai-free-photo.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To StellarBD</h1>
      <p className="mb-5">
      Discover a universe of style with our exclusive collection of trendy, comfortable, and premium clothing. From chic everyday wear to show-stopping outfits for special occasions, StellarBD brings you the best in fashion.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner