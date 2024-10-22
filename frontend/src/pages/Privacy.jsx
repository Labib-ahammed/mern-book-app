import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Privacy Policy for RedBook
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to RedBook. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data when you use our website to
          download book PDFs.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>
          <strong>Personal Information:</strong> When you request a book to be
          uploaded, we collect your email address. This information is used
          solely for fulfilling your request and communicating with you about
          the requested book.
        </p>
        <p>
          <strong>Usage Data:</strong> We may collect information on how you
          access and use the website, including your IP address, browser type,
          and pages visited. This data helps us improve our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>
          <strong>To Provide Services:</strong> We use your email address to
          process your book upload requests and to communicate with you
          regarding your requests.
        </p>
        <p>
          <strong>To Improve Our Website:</strong> Usage data helps us
          understand how our website is used and how we can improve it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Sharing Your Information
        </h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. We may share your information with trusted third
          parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at{" "}
          <Link
            to={"/contact"}
            className="font-bold cursor-pointer text-blue-300"
          >
            Contact Now
          </Link>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          You are advised to review this Privacy Policy periodically for any
          changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <Link
            to={"/contact"}
            className="font-bold cursor-pointer text-blue-300"
          >
            Contact Now
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default Privacy;
