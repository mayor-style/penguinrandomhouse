import "./../src/App.css";
import logo from "../src/assets/prh-logo.svg";
import { useState } from "react";

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    biography: "",
    websiteAddress: "",
    blogAddress: "",
    twitterHandle: "",
    everPublishedaBook: "",
    everRepresentedbyAgent: "",
    whoReferred: "",
    bookInspiration: "",
    bookTitle: "",
    bookGenre: "",
    bookWordCount: "",
    bookEverPublished: "",
    bookSynopsis: "",
    bookFile: "",
    pitch: "",
  });

  console.log(formDetails);

  const handleFirstnameChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLastnameChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBiographyChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWebAddressChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlogAddressChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTwitterHandleChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEverPublishedaBookChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEverRepresentedbyAgentChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhoReferredChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookInspirationChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookTitleChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookGenreChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookWordCountChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookEverPublishedChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookSynopsisChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookFileChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.files,
    }));
  };

  const handlePitchChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="py-[40px]">
        <div>
          <div className="flex justify-center">
            <img className="w-[150px]" src={logo} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-[30px] px-[15px]">
            <p className="lg:text-[30px] text-[25px] text-center">
              Submit Your Literary Work for Review and Publication
            </p>
            <p className="lg:mt-[10px] mt-[20px] font-sans text-[17px] lg:text-[16px] lg:w-[900px] lg:text-center text-center leading-[25px] lg:leading-0">
              Penguin Random House is home to the world’s greatest storytellers,
              releasing more than 15,000 titles annually. From blockbuster
              fiction and Michelin-starred chefs to children’s classics, we
              publish something for everyone. We’re always looking for creative
              and innovative ways to collaborate with clients. Welcoming talents
              ranging from critically acclaimed industry leaders to emerging
              voices, including journalists, novelists, screenwriters, actors,
              literary estates, publications, and media personalities.
            </p>
          </div>
        </div>
        <form action="">
          <div className="mt-[60px] lg:px-[80px] px-[10px]">
            <div className="bg-[rgb(68,68,68)] p-[15px] ">
              <div>
                <p className="lg:text-[25px] text-[22px] text-white font-sans font-semibold">
                  Step 1. Tell us about the author
                </p>
                <p className="mt-[5px] font-sans  text-[14px] text-white">
                  Fill in these author-related fields.
                </p>
              </div>
              <div className="lg:mt-[50px] mt-[70px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    First Name:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="author's first name"
                    type="text"
                    name="firstname"
                    required
                    onChange={handleFirstnameChange}
                  />
                </div>
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Last Name:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="author's last name"
                    type="text"
                    name="lastname"
                    required
                    onChange={handleLastnameChange}
                  />
                </div>
              </div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    E-Mail Address:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your e-mail address"
                    type="text"
                    name="email"
                    required
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Phone Number:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your phone number"
                    type="text"
                    name="phone"
                    required
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className="mt-[50px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="mt-[50px] flex gap-[40px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Biography:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <textarea
                    className="mt-[10px] w-full h-[200px] p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    name="biography"
                    required
                    onChange={handleBiographyChange}
                  ></textarea>
                  <p className="text-white font-sans text-[13px] mt-[10px]">
                    Tell us a little about yourself and any writing credentials
                    you may have.
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Website Address:{" "}
                    <small className="font-normal text-[13px]">
                      (if you have any)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your website"
                    type="text"
                    name="websiteAddress"
                    onChange={handleWebAddressChange}
                  />
                </div>
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Blog Address:{" "}
                    <small className="font-normal text-[13px]">
                      (if you have any)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your blog"
                    type="text"
                    name="blogAddress"
                    onChange={handleBlogAddressChange}
                  />
                </div>
              </div>
              <div className="mt-[30px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Twitter Handle:{" "}
                    <small className="font-normal text-[13px]">
                      (if you have any)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your twitter handle"
                    type="text"
                    name="twitterHandle"
                    onChange={handleTwitterHandleChange}
                  />
                </div>
                <div className="w-full"></div>
              </div>
              <div className="mt-[50px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <p className="text-white text-[15px] font-sans font-semibold">
                  Have you previously published other books?
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Yes
                  </p>
                  <input
                    type="radio"
                    value={true}
                    name="everPublishedaBook"
                    onChange={handleEverPublishedaBookChange}
                  />
                </div>
                <div className=" flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    No
                  </p>
                  <input
                    type="radio"
                    value={false}
                    name="everPublishedaBook"
                    onChange={handleEverPublishedaBookChange}
                  />
                </div>
              </div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <p className="text-white text-[15px] font-sans font-semibold">
                  Have you ever been represented by a literary agent before?
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Yes
                  </p>
                  <input
                    type="radio"
                    value={true}
                    name="everRepresentedbyAgent"
                    onChange={handleEverRepresentedbyAgentChange}
                  />
                </div>
                <div className=" flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    No
                  </p>
                  <input
                    type="radio"
                    value={false}
                    name="everRepresentedbyAgent"
                    onChange={handleEverRepresentedbyAgentChange}
                  />
                </div>
              </div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    If this submission is a referral, who referred you?
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="twitter or instagram handle"
                    type="text"
                    name="whoReferred"
                    onChange={handleWhoReferredChange}
                  />
                </div>
                <div className="w-full"></div>
              </div>
              <div className="mt-[50px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    What is the inspiration behind this work of art ?
                  </p>
                  <textarea
                    className="mt-[10px] w-full h-[200px] p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    name="bookInspiration"
                    id=""
                    onChange={handleBookInspirationChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-[60px] mt-[30px] lg:px-[80px] px-[10px]">
            <div className="bg-[rgb(68,68,68)] p-[15px] ">
              <div>
                <p className="lg:text-[25px] text-[22px] text-white font-sans font-semibold">
                  Step 2. Tell us about the book
                </p>
                <p className="mt-[5px] font-sans text-[14px] text-white">
                  Fill in these book-related fields.
                </p>
              </div>
              <div className="lg:mt-[50px] mt-[70px] flex flex-col lg:flex-row lg:gap-[40px] gap-[30px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Title:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your book's title"
                    type="text"
                    name="bookTitle"
                    required
                    onChange={handleBookTitleChange}
                  />
                </div>
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Genre:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="your book's genre"
                    type="text"
                    name="bookGenre"
                    required
                    onChange={handleBookGenreChange}
                  />
                  <p className="font-sans text-[13px] text-white">
                    Please ensure you accurately specify the genre of your work,
                    as incorrect categorization may lead to rejection.
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Word Count:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <input
                    className="mt-[10px] h-[34px] w-full p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    placeholder="approximate word count"
                    type="text"
                    name="bookWordCount"
                    required
                    onChange={handleBookWordCountChange}
                  />
                  <p className="font-sans text-[13px] text-white">
                    Enter the approximate{" "}
                    <small className="font-sans text-[13px] text-white font-bold">
                      WORD
                    </small>{" "}
                    count of your book. Enter numbers only. Do not include any
                    letters or special characters.
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="lg:mt-[50px] mt-[30px] flex flex-col lg:flex-row lg:gap-[40px] gap-[20px]">
                <p className="text-white text-[15px] font-sans font-semibold">
                  Is this book currently published or has it ever been published
                  before?
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Yes
                  </p>
                  <input
                    type="radio"
                    value={true}
                    name="bookEverPublished"
                    onChange={handleBookEverPublishedChange}
                  />
                </div>
                <div className=" flex items-center gap-[10px]">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    No
                  </p>
                  <input
                    type="radio"
                    value={false}
                    name="bookEverPublished"
                    onChange={handleBookEverPublishedChange}
                  />
                </div>
              </div>
              <div className="lg:mt-[50px] mt-[30px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="lg:mt-[50px] mt-[30px] flex gap-[40px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Synopsis:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <textarea
                    className="mt-[10px] w-full h-[200px] p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    name="bookSynopsis"
                    required
                    onChange={handleBookSynopsisChange}
                  ></textarea>
                  <p className="font-sans text-[13px] text-white">
                    Enter a short synopsis of your book. Avoid pasting large
                    blocks of text, as this may cause delays or slow processing
                  </p>
                </div>
              </div>
              <div className="lg:mt-[50px] mt-[30px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="lg:mt-[50px] mt-[30px] flex flex-col gap-[20px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Submit the First 10 Pages of Your Work (fiction or
                    non-fiction).
                  </p>
                  <p className="font-sans text-[14px] text-white">
                    For shorter works, such as picture books, please include the
                    entire text.
                  </p>
                </div>
                <div className="bg-white h-[50px] flex items-center px-[20px]">
                  <input
                    className="font-sans text-[14px] w-full cursor-pointer"
                    type="file"
                    name="bookFile"
                    onChange={handleBookFileChange}
                  />
                </div>
                <div>
                  <p className="text-white text-[14px] font-sans">
                    Acceptable file formats:{" "}
                    <small className="text-white text-[15px] font-sans font-semibold">
                      doc, docx.
                    </small>
                  </p>
                  <p className="text-white text-[14px] font-sans">
                    File Size Limit:{" "}
                    <small className="text-white text-[15px] font-sans font-semibold">
                      2 MB (same as 2,000 KB)
                    </small>
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-t-[1px] border-[rgb(255,111,0)]"></div>
              <div className="lg:mt-[50px] mt-[30px] flex gap-[40px]">
                <div className="w-full">
                  <p className="text-white text-[15px] font-sans font-semibold">
                    Pitch:{" "}
                    <small className="font-normal text-[13px]">
                      (required)
                    </small>
                  </p>
                  <textarea
                    className="mt-[10px] w-full h-[100px] p-[15px] outline-none border-[1.5px] text-[15px] font-sans focus:border-[rgb(255,111,0)] "
                    name="pitch"
                    required
                    onChange={handlePitchChange}
                  ></textarea>
                  <p className="font-sans text-[14px] text-white">
                    Enter a one sentence pitch for your book.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-[60px] mt-[30px] lg:px-[80px] px-[10px]">
            <div className="bg-[rgb(68,68,68)] p-[15px] flex flex-col gap-[30px] ">
              <div>
                <p className="lg:text-[25px] text-[22px] text-white font-sans font-semibold">
                  Final Step: Submission
                </p>
              </div>
              <div className="flex justify-center">
                <button className="bg-[rgb(255,111,0)] text-white w-[200px] h-[40px] font-semibold font-sans">
                  Submit
                </button>
              </div>
              <div>
                <p className="text-white text-[15px] font-sans font-semibold">
                  Important:{" "}
                  <small className="text-white text-[13px] font-sans font-normal">
                    After submitting your work, you will receive a confirmation
                    email acknowledging your submission. If your submission is
                    approved or rejected, you will be notified via email with
                    further details. Good luck, and thank you for sharing your
                    creative journey with us!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
