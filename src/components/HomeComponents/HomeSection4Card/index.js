import React from 'react'
import "../HomeSection4Card/style.scss"
function HomeSection4Card() {
    return (
        <>
            <div className='form-container'>
                <div className='form-text'>
                    <h3>From our blog</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                </div>


                <div class="card-all">
                    <div class="card">
                        <img src='https://dummyimage.com/600x350/ced4da/6c757d' />
                        <div class="container">
                            <i class="fa-brands fa-cc-visa"></i>
                            <h4><b>Blog post title</b></h4>
                            <p>Some more quick example text to build on the   up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='kelly'>
                                <img src='https://dummyimage.com/40x40/ced4da/6c757d' />

                                <b>Kelly Rowan</b>
                            </div>


                        </div>
                    </div>
                    <div class="card">
                        <img src='https://dummyimage.com/600x350/ced4da/6c757d' />
                        <div class="container">
                            <i class="fa-brands fa-cc-visa"></i>
                            <h4><b>Another blog post title</b></h4>
                            <p>This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='kelly'>
                                <img src='https://dummyimage.com/40x40/ced4da/6c757d' />

                                <b>Josiah Barclay</b>
                            </div>


                        </div>
                    </div>
                    <div class="card">
                        <img src='https://dummyimage.com/600x350/ced4da/6c757d' />
                        <div class="container">
                            <i class="fa-brands fa-cc-visa"></i>
                            <h4><b>The last blog post title is a little bit longer than the others</b></h4>
                            <p>Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='kelly'>
                                <img src='https://dummyimage.com/40x40/ced4da/6c757d' />

                                <b>Evelyn Martinez</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ma4'>
                <div className='ma4-container'>
                    <div className='ma4-text'>
                        <h3>New products, delivered to you.</h3>
                        <p>Sign up for our newsletter for the latest updates.</p>
                    </div>


                    <div className='ma4-input'>
                    <input placeholder='Email address...' />
                    <button>Sign Up</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HomeSection4Card