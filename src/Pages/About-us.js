import  "./About-us.css"
import DoubleColumnImgRight from "../components/DoubleColumn/DoubleColumnImgRight";
import DoubleColumnImgLeft from "../components/DoubleColumn/DoubleColumnImgLeft";
import FullWidthImg from "../components/FullWidthImg/FullWidthImg";

function AboutUs() {
    return (
        <>
            <div className="page-wrapper">
                <h1>The story of RecipeTracker</h1>
                <DoubleColumnImgRight
                    image={require('../assets/character 6.svg').default}
                    alt="man with computer"
                    title={"It started with frustration"}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque consequatur dolorem et ipsam, molestias possimus quae quaerat quam quasi quod reiciendis temporibus totam. Debitis exercitationem iusto maxime minima modi nostrum officia qui sequi soluta vel? Eaque earum harum quae veritatis? Ab accusantium dolorem necessitatibus optio sunt. Ab aspernatur consequatur consequuntur corporis culpa deserunt dicta dolores, eos est excepturi, harum hic ipsam minima mollitia nobis officiis perspiciatis, quibusdam repellat velit veniam. Error nihil porro possimus ullam? Accusamus, ad aspernatur deleniti dicta dignissimos distinctio dolor ducimus eius et facere fuga fugit hic illum inventore minima modi molestiae nisi non numquam officia pariatur porro, praesentium quam quas qui quis repudiandae sapiente sed sit, suscipit tempora tenetur voluptate voluptates. A ab accusantium adipisci consequatur culpa debitis, doloremque esse exercitationem facere facilis fugiat itaque, iure iusto labore laudantium magni maxime pariatur provident quae quam quia quibusdam quidem sequi similique sunt temporibus vel. Doloremque, molestias."
                />
                <DoubleColumnImgLeft
                    image={require('../assets/character 20.svg').default}
                    alt="man with computer"
                    title="Then let's do something about it!"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque consequatur dolorem et ipsam, molestias possimus quae quaerat quam quasi quod reiciendis temporibus totam. Debitis exercitationem iusto maxime minima modi nostrum officia qui sequi soluta vel? Eaque earum harum quae veritatis? Ab accusantium dolorem necessitatibus optio sunt. Ab aspernatur consequatur consequuntur corporis culpa deserunt dicta dolores, eos est excepturi, harum hic ipsam minima mollitia nobis officiis perspiciatis, quibusdam repellat velit veniam. Error nihil porro possimus ullam? Accusamus, ad aspernatur deleniti dicta dignissimos distinctio dolor ducimus eius et facere fuga fugit hic illum inventore minima modi molestiae nisi non numquam officia pariatur porro, praesentium quam quas qui quis repudiandae sapiente sed sit, suscipit tempora tenetur voluptate voluptates. A ab accusantium adipisci consequatur culpa debitis, doloremque esse exercitationem facere facilis fugiat itaque, iure iusto labore laudantium magni maxime pariatur provident quae quam quia quibusdam quidem sequi similique sunt temporibus vel. Doloremque, molestias."
                />
            </div>
            <FullWidthImg
                image={require('../assets/pexels-fauxels-3184419.jpg').default}
                title="The team"
            />
        </>
    )
}

export default AboutUs;