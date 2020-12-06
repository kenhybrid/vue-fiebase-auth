<template>
  <div>
    <v-form class="pa-2">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 class="px-1">
          <v-text-field
            label="Username"
            color="success"
            v-model="username"
            :error-messages="usernameErrors"
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            prepend-inner-icon="mdi-account-plus-outline"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="px-1">
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="Email"
            color="success"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="px-1">
          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="Password"
            type="password"
            color="success"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            prepend-inner-icon="mdi-key-outline"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="px-1">
          <v-text-field
            label="Password again"
            v-model="repeatpassword"
            :error-messages="repeatpasswordErrors"
            type="password"
            color="success"
            required
            @input="$v.repeatpassword.$touch()"
            @blur="$v.repeatpassword.$touch()"
            prepend-inner-icon="mdi-lock-open-outline"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 class="px-1">
          <v-btn
            block
            color="success"
            rounded
            dark
            class="mt-2"
            :loading="loading"
            @click="onSignup"
            ><v-icon left>mdi-account-plus-outline</v-icon>
            <span right>Sign Up</span></v-btn
          >
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, minLength: minLength(6) },
    username: { required, minLength: minLength(4) },
    email: { required, email },
    repeatpassword: {
      sameAsPassword: sameAs("password"),
      required
    }
  },
  data() {
    return {
      loading: false,

      //auth
      password: "",
      repeatpassword: "",
      email: "",
      username: ""
    };
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required!");
      return errors;
    },
    repeatpasswordErrors() {
      const errors = [];
      if (!this.$v.repeatpassword.$dirty) return errors;
      !this.$v.repeatpassword.sameAsPassword &&
        errors.push("Password do not match!");
      !this.$v.password.required && errors.push("Repeat password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required!");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength &&
        errors.push("Username must be more than 4 characters.");
      !this.$v.username.required && errors.push("Username  is required!");
      return errors;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        setTimeout(() => {
          this.$router.go("/");
        }, 200);
      }
    }
  },
  methods: {
    onSignup() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        //invalid
      } else {
        //valid
        console.log("submit!");

        //  submit logic
        this.$store.dispatch("signUp", {
          email: this.email,
          password: this.password
        });
        //create a users table
      }
    }
  }
};
</script>

<style></style>
