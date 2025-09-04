function Help() {
  return (
    <div className="p-5 ml-3 mt-15 max-w-md mx-auto flex flex-col gap-6 w-full items-start font-normal">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-900 w-full">Help & Support</h1>
      <p className="text-gray-600">Find answers to common questions or contact support below.</p>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">How do I request a bin collection?</h2>
          <p className="text-gray-600">Go to the Request Collection page, fill in your details, and submit your request.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">How do I update my profile?</h2>
          <p className="text-gray-600">Visit the Profile page to update your personal information.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Need more help?</h2>
          <p className="text-gray-600">Contact us at <a href="mailto:support@example.com" className="text-emerald-700 underline">support@example.com</a> or call <span className="text-emerald-700">+234 800 123 4567</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
