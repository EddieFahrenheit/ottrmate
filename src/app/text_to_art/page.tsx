"use client";

import FormField from "../../../src/components/FormField";
import BaseButton from "../../../src/components/BaseButton";
import BaseButtons from "../../../src/components/BaseButtons";
import CardBox from "../../../src/components/CardBox";
import { Dna } from "react-loader-spinner";
import SectionMain from "../../../src/components/SectionMain";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import Image from "next/image";

interface generateProps {
  textarea: string;
}

export default function Home() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async (values: generateProps) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/?prompt=${values.textarea}`
      );
      const imageString = await res.text();
      setImage(imageString);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <SectionMain>
      <CardBox>
        <Formik
          initialValues={{
            textarea: "",
          }}
          onSubmit={generate}
        >
          <Form>
            <FormField
              label="🚀 Stable Diffusion - Convert text to art with the power of machine learning"
              hasTextareaHeight
            >
              <Field
                name="textarea"
                as="textarea"
                placeholder="Takes ~1 minute to build the image in the backend. Please be patient!"
              />
            </FormField>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Prompt" />
              <BaseButton type="reset" color="info" outline label="Reset" />
            </BaseButtons>
          </Form>
        </Formik>
      </CardBox>
      {loading ? (
        <CardBox>
          <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center gap-6">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        </CardBox>
      ) : image ? (
        <CardBox>
          <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center gap-6">
            <Image
              src={`data:image/png;base64,${image}`}
              alt={""}
              height={512}
              width={512}
            />
          </div>
        </CardBox>
      ) : null}
    </SectionMain>
  );
}
