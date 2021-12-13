import React from 'react';
import Axios from 'axios';
import FileDownload from 'js-file-download';

const Home = () => {

    const download = e => {
        e.preventDefault();
        Axios({
            url: "http://localhost:5000/css-notes",
            method: 'GET',
            responseType: 'blob'
        }).then(res => {
            FileDownload(res.data, "downloaded.zip");
        });
    };

    return (
        <>
            <div className="container">
                <div id="jumbotron" className='mt-5'>
                    <h1>These Are Some Apps we have</h1>
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                {/* Featured */ }
                <div id="featured" className='mt-5'>
                    <h1>By <a href="https://www.codewithharry.com/">@CodeWithHarry</a></h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" style={ { width: '18rem' } }>
                                <div className="card-body">
                                    <h5 className="card-title">CSS</h5>
                                    <p className="card-text">These Are the Notes for Css the TTD team has compiled. A person who doesn't no coding could also learn CSS with the notes provided</p>
                                    <button onClick={ e => download(e) } className="btn container-fluid btn-primary">Download</button>
                                    <a href='https://www.youtube.com/c/CodeWithHarry' className="btn btn-link" target='_blank'>Please Support the person who created these notes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" style={ { width: '18rem' } }>
                                <div className="card-body">
                                    <h5 className="card-title">Django CheatSheet</h5>
                                    <p className="card-text">This is a cheatsheet which was compiled by TTD for Django. This is the most ultimate django cheatsheet by <a href="https://www.codewithharry.com">@CodeWithHarry</a></p>
                                    <a href='https://api.codewithharry.com/media/blogFiles/django-cheatsheet/Django_Cheatsheet_CodeWithHarry.pdf' className="btn container-fluid btn-primary">View/Download</a>
                                    <a href='https://www.youtube.com/c/CodeWithHarry' className="btn btn-link" target='_blank'>Please Support the person who created these notes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" style={ { width: '18rem' } }>
                                <div className="card-body">
                                    <h5 className="card-title">CSS</h5>
                                    <p className="card-text">These Are the Notes for Css the TTD team has compiled. A person who doesn't no coding could also learn CSS with the notes provided</p>
                                    <button onClick={ e => download(e) } className="btn container-fluid btn-primary">Download</button>
                                    <a href='https://www.youtube.com/c/CodeWithHarry' className="btn btn-link" target='_blank'>Please Support the person who created these notes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" style={ { width: '18rem' } }>
                                <div className="card-body">
                                    <h5 className="card-title">CSS</h5>
                                    <p className="card-text">These Are the Notes for Css the TTD team has compiled. A person who doesn't no coding could also learn CSS with the notes provided</p>
                                    <button onClick={ e => download(e) } className="btn container-fluid btn-primary">Download</button>
                                    <a href='https://www.youtube.com/c/CodeWithHarry' className="btn btn-link" target='_blank'>Please Support the person who created these notes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
