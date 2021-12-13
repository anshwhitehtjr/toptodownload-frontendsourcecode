import React from 'react';

const Home = () => {
    return (
        <>
            <div className="container">
                <div id="jumbotron" className='mt-5'>
                    <h1>These Are Some Apps we have</h1>
                    <div class="container-fluid">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                {/* Featured */ }
                <div id="featured">
                    <h4 className='mt-5'>Featured</h4>
                </div>
            </div>
        </>
    );
};

export default Home;
