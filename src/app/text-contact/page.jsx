// "use client";
// import { useEffect } from "react";

// export default function ContactSection() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://form.mrun1corn.xyz/embed.js";
//     script.setAttribute("data-form", "frm_5e59aa275629");
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4 ">Get in Touch</h2>
//       <div
//         data-form="frm_5e59aa275629"
//         data-unstyled="true"
//         className="my-custom-tailwind-wrapper flex gap-6"
//       />
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    _hp_bio_field: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const res = await fetch(
        "https://form.mrun1corn.xyz/api/forms/frm_b0d79beba208/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...formData, _bcf_ts: timestamp }),
        },
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          loading: false,
          message: data.message || "Thank you! Submission received.",
          error: false,
        });
      } else {
        setStatus({
          loading: false,
          message: data.message || "Submission failed.",
          error: true,
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: "Network error. Please try again.",
        error: true,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      {status.message && (
        <div
          className={`p-4 rounded-lg text-sm ${status.error ? "bg-red-50 text-red-700 border border-red-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
        >
          {status.message}
        </div>
      )}
      <input
        type="text"
        name="_hp_bio_field"
        value={formData._hp_bio_field}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Phone *
        </label>
        <input
          type="text"
          name="phone"
          required
          value={formData.phone || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Country *
        </label>
        <select
          name="country"
          required
          value={formData.country || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        >
          <option value="">-- Select --</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
          Message *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:border-slate-700"
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition disabled:opacity-50"
      >
        {status.loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
