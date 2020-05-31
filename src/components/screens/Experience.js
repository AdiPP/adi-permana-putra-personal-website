import React from 'react'
import work1 from '../../assets/images/works/work-simpbb-lst.png'
import work2 from '../../assets/images/works/work-pos-lst.png'
import work3 from '../../assets/images/works/work-lsthis-lst.jpg'
import work4 from '../../assets/images/works/work-wp-lst.png'
import work5 from '../../assets/images/works//work-simperpus.png'

const Work = () => {
  return (
    <div>
      <div className="Content">
        <div className="container">
          <div className="Work">
            <h3>
              Work
            </h3>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  <img src={work1} class="card-img-top"/>
                  <div class="card-body">
                    <h5 class="card-title">PBB & BPHTB Information Management System</h5>
                    
                    <p class="card-text">Management Information System for Mempawah Regency in West Kalimantan as a solution for registering new tax objects and updating data independently.</p>
                    {/* <a href="#" class="btn btn-primary">Read More</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  <img src={work2} class="card-img-top"/>
                  <div class="card-body">
                    <h5 class="card-title">Sade POS</h5>
                    <p class="card-text">Web-based Point of Sale application as a Final Project, specifically for MSME activists to be able to compete with advanced industries.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  <img src={work3} class="card-img-top"/>
                  <div class="card-body">
                    <h5 class="card-title">Implementation Team at LST Healtcare Information System</h5>
                    <p class="card-text">Implementation Team of LST Healthcare Information System Application at the Palabuhan Ratu Regional Hospital Sukabumi .</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  <img src={work4} class="card-img-top"/>
                  <div class="card-body">
                    <h5 class="card-title">PT. Lawang Sewu Teknologi Company Profile</h5>
                    <p class="card-text">Web Profile for PT. Lawang Sewu Technology that supports semi-cms features.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  <img src={work5} class="card-img-top"/>
                  <div class="card-body">
                    <h5 class="card-title">Library Management Information System</h5>
                    <p class="card-text">Library Management Information System for the Banyumas Regency Education Office.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mt-3">
                <div class="card h-100" style={{width: "18rem;"}}>
                  {/* <img src="https://images.unsplash.com/photo-1590784483120-bff33bff7107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="card-img-top"/> */}
                  <div class="card-body d-flex align-items-center">
                    <div>
                      <h5 class="card-title">Here is Space for Our Project 🤝</h5>
                      <p class="card-text">Let's make this world become a better place with the help of Technology.</p>
                      {/* <a href="#" class="btn btn-primary">Feel free to discuss</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;