import {
  Box,
  Container,
  TextInput,
  Title,
  Select,
  Button,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserProfile } from "../../state/actions/profile";

const AddProfile = () => {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      height: null,
      weight: null,
      dob: "",
      gender: "",
    },
  });
  
  const [value, setValue] = useState("");
  const formSubmitHandler = (values, e) => {
    e.preventDefault();
    console.log(values);
    // dispatch(addUserProfile(values.height, values.weight, values.dob, values.gender));
  };
  // const {hasProfile} = useSelector(state => state.profileAuth)

  // useEffect(() => {
  //   console.log("Profile udpated!");
  // }, [hasProfile])

  return (
    <Container size="lg">
      <Title mt="4rem" align="center">Set Up Your Profile</Title>
      <Divider my="md"/>
      <Box
        component="form"
        className={styles.formContainer}
        onSubmit={form.onSubmit((values, e) => formSubmitHandler(values, e))}
      >
        <TextInput
          label="Height"
          placeholder="cm"
          required
          {...form.getInputProps(`height`)}
        />
        <TextInput
          label="Weight"
          placeholder="kg"
          required
          {...form.getInputProps(`weight`)}
        />
        <TextInput
          label="Date"
          placeholder="YYYY-MM-DD"
          required
          {...form.getInputProps(`dob`)}
        />
        <Select
          label="Gender"
          placeholder="Pick one"
          data={[
            { value: "MALE", label: "Male" },
            { value: "FEMALE", label: "Female" },
          ]}
          {...form.getInputProps(`gender`)}
        />
        <Button type="submit">Submit</Button>
      </Box>
    </Container>
  );
};
export default AddProfile;