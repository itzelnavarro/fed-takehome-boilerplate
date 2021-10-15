import react from "react";
import './Articles.scss';

function Articles(){
    return(
        <section id="news">
            <article>
                <div className="contImg"></div>
                <h2>Article 1</h2>
                <span>Aug 8, 2013</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ligula sapien, ullamcorper rhoncus leo tincidunt a. Nam convallis, velit non viverra varius, nisi dui suscipit nibh, tempus feugiat leo tortor in leo.</p>
            </article>
            <article>
                <div className="contImg"></div>
                <h2>Article 2</h2>
                <span>Aug 14, 2013</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ligula sapien, ullamcorper rhoncus leo tincidunt a. Nam convallis, velit non viverra varius, nisi dui suscipit nibh, tempus feugiat leo tortor in leo.</p>
            </article>
            <article>
                <div className="contImg"></div>
                <h2>Article 3</h2>
                <span>Aug 21, 2013</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ligula sapien, ullamcorper rhoncus leo tincidunt a. Nam convallis, velit non viverra varius, nisi dui suscipit nibh, tempus feugiat leo tortor in leo.</p>
            </article>
        </section>
    );
}

export default Articles;