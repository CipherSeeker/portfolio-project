import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import * as css from "./FormHead.styled";



const FormHead = () => {
    return (
        <div className="App">
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="name" placeholder="Name" type="text" />
                    <Field name="email" placeholder="Email\Tel" type="text" />
                    <Field name="message" type="textarea" placeholder="Message" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormHead

