<template>
  <div>
    <v-form class="pa-2">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 class="px-1">
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="Email"
            color="success"
            required
            prepend-inner-icon="mdi-email-outline"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 class="px-1">
          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="Password"
            color="success"
            type="password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            prepend-inner-icon="mdi-key-outline"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md12 class="px-1">
          <v-btn
            block
            color="success"
            rounded
            class="mt-2"
            dark
            :loading="loading"
            @click="onSignin"
            ><v-icon left>mdi-lock-open-outline</v-icon>
            <span right>Sign In</span></v-btn
          >
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, minLength: minLength(6) },
    email: { required, email }
  },
  data() {
    return {
      loading: false,
      //auth
      password: "",
      email: ""
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

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required!");
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
          this.$router.push("/");
        }, 200);
      }
    }
  },
  methods: {
    onSignin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        //invalid
      } else {
        //valid
        console.log("submit!");
        //  submit logic
        this.$store.dispatch("signIn", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style></style>
