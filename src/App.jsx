import "./../src/App.css";
import logo from "../src/assets/prh-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast } from "sonner";
import axios from "axios";

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
    pitch: "",
  });
  const [bookFile, setBookFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

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
    setBookFile(e.target.files[0]);
  };

  const handlePitchChange = (e) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const baseUrl = import.meta.env.VITE_API_URL;
  console.log("API URL:", baseUrl);
  const navigateTo = useNavigate();

  const handleRedirect = () => {
    // This will navigate to an external URL
    window.location.href = "https://www.penguinrandomhouse.com/books/"; // Redirect to the external website
  };

  const handleSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Indicate that the form is being submitted

    console.log(formDetails); // Log form details for debugging

    // List of required fields
    const requiredFields = [
      "firstname",
      "lastname",
      "email",
      "phone",
      "biography",
      "bookTitle",
      "bookGenre",
      "bookWordCount",
      "bookSynopsis",
      "pitch",
    ];

    // Check for missing required fields
    for (let field of requiredFields) {
      if (!formDetails[field]) {
        setIsSubmitting(false);
        return toast.error(`Please fill out the ${field} field.`);
      }
    }

    // Check if a book file is selected
    if (!bookFile) {
      setIsSubmitting(false);
      return toast.error("Please select a file!");
    }

    // Validate email format
    if (formDetails.email && !validateEmail(formDetails.email)) {
      setIsSubmitting(false);
      return toast.error("Invalid email format.");
    }

    // Prepare FormData for submission
    const formData = new FormData();
    formData.append("bookFile", bookFile); // Append the book file

    // Append other form details to FormData
    for (const [key, value] of Object.entries(formDetails)) {
      formData.append(key, value);
    }

    try {
      // Send form data to the backend
      const response = await axios.post(`${baseUrl}/submit`, formData, {
        method: "POST",
      });

      console.log("Response:", response.data);

      // Keep the submitting screen visible for 5 seconds
      setTimeout(() => {
        setIsSubmitting(false); // Hide spinner after 5 seconds
        setSubmissionSuccess(true); // Show success state

        // Start redirection after 2 seconds of showing the success message
        setTimeout(() => {
          handleRedirect(); // Redirect after success message
        }, 2000); // 2 seconds delay before redirecting
      }, 3000); // Keep submitting screen visible for 5 seconds
    } catch (err) {
      // Handle error by resetting submission state
      setIsSubmitting(false);
      console.error("Error during book submission:", err);

      // Show a user-friendly error message
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="py-[60px]">
        <div>
          <div className="flex justify-center">
            <img className="w-[150px]" src={logo} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-[30px] px-[25px]">
            <p className="lg:text-[32px] text-[25px] text-center font-semibold">
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
        <form onSubmit={handleSubmission}>
          <div className="mt-[60px] lg:px-[80px] px-[10px]">
            <div className="bg-[rgb(68,68,68)] px-[15px] py-[40px] ">
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
                    onChange={handleBiographyChange}
                  ></textarea>
                  <p className="text-white font-sans text-[14px] mt-[10px]">
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
            <div className="bg-[rgb(68,68,68)] px-[15px] py-[40px] ">
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
                    onChange={handleBookGenreChange}
                  />
                  <p className="font-sans text-[14px] text-white">
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
                    onChange={handleBookWordCountChange}
                  />
                  <p className="font-sans text-[14px] text-white">
                    Enter the approximate{" "}
                    <small className="font-sans text-[14px] text-white font-bold">
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
                    onChange={handleBookSynopsisChange}
                  ></textarea>
                  <p className="font-sans text-[14px] text-white">
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
            <div className="bg-[rgb(68,68,68)] px-[15px] py-[40px] flex flex-col gap-[30px] ">
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
                  <small className="text-white text-[14px] font-sans font-normal">
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
      <div
        className={` ${
          isSubmitting || submissionSuccess ? "flex" : "hidden"
        } bg-white bg-opacity-70  fixed top-0 bottom-0 left-0 right-0 flex-col justify-center items-center `}
      >
        <Oval
          visible={true}
          height="50"
          color="rgb(255,111,0)"
          secondaryColor="rgb(248, 245, 240)"
          radius="9"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />

        <div className="mt-[10px]">
          <p className="font-sans text-[18px]">
            {isSubmitting && !submissionSuccess
              ? "Submitting..."
              : !isSubmitting && submissionSuccess
              ? "Submission Successful! Redirecting..."
              : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
5;
