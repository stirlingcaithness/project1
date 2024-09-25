import flowerBanner from "../images/flower_banner.jpeg"

function HomeBanner(title) {
  return (
    <div className="banner">
        <img src={flowerBanner} alt="main banner" />
        <h1>{title.title}</h1>
    </div>
  )
}

export default HomeBanner