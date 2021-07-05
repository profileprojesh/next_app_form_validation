import useForm from './useForm'
import Userside from './Userside'
import addError from './handleErrors'



function Formcomponent() {

    const { values, handleInput, handleSubmit, num, users, getallusers, errors } = useForm(addError)
    return (
        <div className="form_section">
            <h1>Welcome to Form Validation with Next js</h1>

            <form onSubmit={handleSubmit} className="form_element">

                <div>
                    <label htmlFor="name"><h3>Username</h3></label>
                    <input type='text' name='username' id="name" placeholder='Enter your name' onChange={handleInput} value={values.username} />
                    {errors.username ? <span className="error">* {errors.username}</span> : null}
                </div>

                {/* Inserting radio button */}
                <div>
                    <label><h3>Gender</h3></label>
                    <div className="radio_btn">
                        <span>
                            <input
                                className="radio"
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleInput}
                            />
                            <span>Male</span>
                        </span>
                        <span className="ml">
                            <input
                                className="radio"
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleInput}
                            />
                            <span>Female</span>
                        </span>
                    </div>
                    {errors.gender ? <span className="error">* {errors.gender}</span> : null}
                </div>
                {/* Radio button  */}

                <div>
                    <label htmlFor="phone"><h3>Phone Number</h3></label>
                    <input type='text' id="phone"  name='phone' placeholder='Enter your Phone Number' onChange={handleInput} value={values.phone} />
                    {errors.phone ? <span className="error">* {errors.phone}</span> : null}
                </div>

                <div>
                    <label htmlFor="email" ><h3>Email</h3></label>
                    <input type='text' id="email"  name='email' placeholder='Enter your email' onChange={handleInput} value={values.email} />
                    {errors.email ? <span className="error">* {errors.email}</span> : null}
                </div>

                <div>
                    <label htmlFor="address"><h3>Address</h3></label>
                    <input type='text' id="address"  name='address' placeholder='Enter your Address' onChange={handleInput} value={values.address} />
                    {errors.address ? <span className="error">* {errors.address}</span> : null}
                </div>

                <div>
                    <label htmlFor="nationality"><h3>Nationality</h3></label>
                    <input type='text' id="nationality"  name='nationality' placeholder='Enter your Nationality' onChange={handleInput} value={values.nationality} />
                    {errors.nationality ? <span className="error">* {errors.nationality}</span> : null}
                </div>

                <div>
                <label htmlFor="dob"><h3>Date of Birth</h3></label>
                    <input type="text" id="dob"  placeholder="mm-dd-yyyy" value={values.dob} onChange={handleInput} name="dob" />
                    {errors.dob ? <span className="error">* {errors.dob}</span> : null}
                </div>

                <div className="select_block mt">
                    <label><h2>Education Background</h2></label>
                    <select className="select_element" value={values.education} name="education" onChange={handleInput}>
                        <option value="">Select Your Education Background</option>
                        <option value="post graduate">Post Graduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="intermidate">Intermidate</option>
                    </select>
                    {errors.education ? <span className="error select_error">* {errors.education}</span> : null}

                </div>

                {/* Inserting radio button */}
                <div>
                    <label><h3>Preferred Mode of Conatct</h3></label>
                    <div className="radio_btn">
                        <span>
                            <input
                                className="radio"
                                type="radio"
                                name="contact"
                                value={values.email}
                                onChange={handleInput}
                            />
                            <span>Email</span>
                        </span>
                        <span className="ml">
                            <input
                                className="radio"
                                type="radio"
                                name="contact"
                                value={values.phone}
                                onChange={handleInput}
                            />
                            <span>Phone</span>
                        </span>
                    </div>
                </div>
                {/* Radio button  */}
                <button className="btn mt">Submit</button>
            </form>

            <Userside num={num} />
        </div>
    )
}

export default Formcomponent
