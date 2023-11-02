export default function Catalog(){
    return(
        <section className="catalog">
            <h2>CATALOG</h2>
            <ul>
                <li><a href="#">
                    <img src="/Images/shtora-harmoniya.jpg" alt="{{image}}" />
                        <h3>Harmoniya</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s
                        </p>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/vertikalni-shtori.jpg" alt="{{image}}" />
                    
                        <h3>Vertical</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s
                        </p>
                    </a></li>
                <li><a href="#">
                    <img src="/Images/perde-shtora.jpg" alt="{{image}}" />
                        <h3>Vertical</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s
                        </p>
                    </a></li>
                

            </ul>
        </section>
    )
}