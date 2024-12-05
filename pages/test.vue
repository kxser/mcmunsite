<template>
    <div class="container">
      <h1>MUNESCO 2025 Form 1 (Delegation Application Form)</h1>
      <p>
        <strong>Email:</strong> mcmuninfotech@gmail.com <br />
        <small>Switch account</small>
      </p>
  
      <FormKit type="form" @submit="onSubmit">
        <!-- School Information -->
        <h2>School Information</h2>
        <FormKit
          type="text"
          name="schoolName"
          label="School Name *"
          validation="required"
        />
        <FormKit type="text" name="city" label="City *" validation="required" />
        <FormKit type="text" name="country" label="Country *" validation="required" />
        <FormKit
          type="text"
          name="schoolAddress1"
          label="School Address Line 1 (Street Address, City, State/Province) *"
          validation="required"
        />
        <FormKit type="text" name="schoolAddress2" label="School Address Line 2" />
        <FormKit
          type="text"
          name="postalCode"
          label="Postal/Zip Code *"
          validation="required"
        />
        <FormKit
          type="radio"
          name="hasParticipated"
          label="Has your school participated in MUN before? *"
          options="Yes,No"
          validation="required"
        />
        <FormKit
          type="number"
          name="advisorsCount"
          label="Number of MUN Advisors Attending *"
          validation="required|number"
          placeholder="Enter a number"
        />
        <FormKit
          type="number"
          name="delegatesCount"
          label="Number of delegates attending *"
          validation="required|number"
          placeholder="Enter a number"
        />
  
        <!-- Advisor Information -->
        <h2>Advisor’s/Director’s Information</h2>
        <FormKit
          type="text"
          name="advisorName"
          label="Advisor’s/Director’s Name and Surname *"
          validation="required"
        />
        <FormKit
          type="select"
          name="advisorGender"
          label="Gender *"
          :options="['Male', 'Female', 'Prefer not to say']"
          validation="required"
        />
        <FormKit
          type="tel"
          name="schoolPhone"
          label="School’s Phone Number *"
          validation="required|length:10"
        />
  
        <h3 v-if="showAdditionalAdvisorFields">Additional Advisor Information</h3>
        <div v-if="showAdditionalAdvisorFields">
          <FormKit
            type="text"
            name="additionalAdvisorName"
            label="Advisor’s/Director’s Name and Surname"
          />
          <FormKit
            type="select"
            name="additionalAdvisorGender"
            label="Gender"
            :options="['Male', 'Female', 'Prefer not to say']"
          />
          <FormKit
            type="tel"
            name="additionalAdvisorPhone"
            label="School’s Phone Number"
          />
          <FormKit
            type="email"
            name="additionalAdvisorEmail"
            label="Email Address"
          />
        </div>
  
        <!-- Delegation Preferences -->
        <h2>Delegation Preferences</h2>
        <p>
          Before indicating your preferences please take a look at the delegations
          list on our website and decide accordingly. Please list the delegation(s)
          you would like to represent in the order of your preference. Please consider
          a variety of countries while making your decisions. We can assure you that we
          will try our best to allocate your delegations according to your requests.
          However, we cannot guarantee that you will be assigned to a delegation of your
          choice.
        </p>
        <FormKit
          type="text"
          name="delegationPreference1"
          label="Delegation Preference #1 *"
          validation="required"
        />
        <FormKit type="text" name="delegationPreference2" label="Delegation Preference #2" />
        <FormKit type="text" name="delegationPreference3" label="Delegation Preference #3" />
        <FormKit type="text" name="delegationPreference4" label="Delegation Preference #4" />
        <FormKit type="text" name="delegationPreference5" label="Delegation Preference #5" />
  
        <!-- Confirmation -->
        <FormKit
          type="checkbox"
          name="confirm"
          label="I confirm that the information given above is exact and accurate, and that I have written all compositions related with the application."
          validation="required"
        />
  
        <!-- Submit Button -->
        <FormKit type="submit" label="Submit" />
      </FormKit>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAdditionalAdvisorFields: false,
      };
    },
    watch: {
      advisorsCount(newCount) {
        this.showAdditionalAdvisorFields = newCount > 1;
      },
    },
    methods: {
      onSubmit(data) {
        console.log("Form submitted with data:", data);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  