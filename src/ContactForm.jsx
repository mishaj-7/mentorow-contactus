
import {phone,map,email} from './assets/icons/index'

const contactForm = () => {
  return (
    // this center the div of dom
    <div className="flex justify-center items-center h-screen bg-black">
      {/* this is the main box div  */}
      <div className="w-[1000px] h-[800px] bg-[#8f769f2b] rounded-[40px]  border border-solid border-[#8552a74f]">
        {/* this is the input field and button div */}
        <div className="w-[700px] h-[600px] my-[95px] mx-[75px]">
          {/* this is heading div */}
          <div className="w-[500px] h-[475px] ">
            <div>
              <p className="relative w-fit mt-[-1.00px] [font-family:'Sen',Helvetica] font-bold text-transparent text-[54px] tracking-[0] leading-[normal]">
                <span className="text-[#f7f7f7]">Get in</span>
                <span className="text-black">&nbsp;</span>
                <span className="text-[#7962fa]">Touch</span>
              </p>
              <p className="pt-[12px] relative w-[545px] [font-family:'Montserrat',Helvetica] font-semibold text-[#eeeeee] text-[14px] tracking-[0.14px] leading-[24px]">
                Feel free to reach us with your queries
              </p>
              {/* form field div */}
              <div className="text-left mt-5">
                <form className="max-w-md ">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                  </div>
                  <div className="pt-[10px]">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                  </div>
                  <div className="pt-[10px]">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                  </div>
                  <div className="pt-[10px]">
                    <select
                      id="dropdown"
                      name="dropdown"
                      className="shadow appearance-noe border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    >
                      <option value="" disabled selected hidden>
                        How did you find us?
                      </option>
                      <option value="option1">Instgram</option>
                      <option value="option2">Youtube</option>
                      <option value="option3">other</option>
                    </select>
                  </div>
                  <div className="pt-[10px]">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#9A7BFF] to-violet-950 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline h-12 w-full"
                    >
                      SEND
                    </button>
                  </div>
                </form>
                {/* form div end here */}
              </div>
              {/* icon div starts here */}
              <div className=" h-[80px] w-[750px] mt-10 inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[28.27px] h-[28.42px] ml-[-0.27px]"
                    alt="Frame"
                    src={phone}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Sen',Helvetica] font-bold text-[#ffffff] text-[13px] tracking-[0.26px] leading-[20px]">
                    <a href="+919745680111">
                      PHONE
                      <br />
                      97456 80111
                    </a>
                  </div>
                </div>
                <div className="flex w-[184px] items-center gap-[15px] relative pl-7">
                  <img
                    className="relative w-[21.28px] h-[28px]"
                    alt="El map marker"
                    src={map}
                  />
                  <div className="relative w-[266px] mt-[-1.00px] mr-[-118.28px] [font-family:'Sen',Helvetica] font-bold text-[#ffffff] text-[13px] tracking-[0.26px] leading-[20px]">
                    <a
                      href="https://www.google.com/maps/place/Everglow+business+centre/@10.0124386,76.3389754,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080d7118c0d549:0x24f1a5285508b05a!8m2!3d10.0124333!4d76.3415503!16s%2Fg%2F11sskxyd_8?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LOCATION
                      <br />
                      Everglow Business Centre 2ND Floor -Seaport-Airport Road,
                      CSEZ.
                    </a>
                  </div>
                </div>
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto] pl-[136px]">
                  <img
                    className="relative w-[28px] h-[28px]"
                    alt="Frame"
                    src={email}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Sen',Helvetica] font-bold text-[#ffffff] text-[13px] tracking-[0.26px] leading-[20px]">
                    <a href="mailto:contact@mentorow.com">
                      Email
                      <br />
                      contact@mentorow.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[500px] mt-[-350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.053578115898!2d76.3415503!3d10.012433300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d7118c0d549%3A0x24f1a5285508b05a!2sEverglow%20business%20centre!5e0!3m2!1sen!2sin!4v1709698509399!5m2!1sen!2sin"
              width="250px"
              height="250px"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactForm;
