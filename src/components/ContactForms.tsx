import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import './ContactForms.css';

const ContactForms: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(20, 'Name must be 20 characters or less')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      address: Yup.string().required('Shipping address is required')
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          'service_bqzvvw5', // EmailJS Dashboard'dan aldığınız servis ID
          'template_s4hkrky', // Şablon ID'niz
          {
            from_name: values.name,
            from_email: values.email,
            shipping_address: values.address
          },
          'mUSSh8WwtR64_c_vB' // EmailJS kullanıcı ID (public key)
        )
        .then(
          (result) => {
            console.log(result);
            toast.success('Message sent successfully!');
            resetForm(); // Formu sıfırla
          }
        )
        .catch((error) => {
          console.error('EmailJS Error:', error);  // Hata mesajını konsola yazdır
          toast.error('Failed to send message. Please try again.');
        });
    }
  });

  return (
    <div className="form">
      <Toaster /> {/* react-hot-toast için Toaster bileşeni */}
      <h2 className="control-p">Order now</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="input">
          <input
            type="text"
            className="form-kontrol"
            placeholder="Name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="input">
          <input
            type="text"
            className="form-kontrol"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="input">
          <textarea
            className="formkontrol"
            placeholder="Shipping address"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="submit d-flex justify-content-center align-items-center mt-5">
          <button type="submit" className="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForms;
