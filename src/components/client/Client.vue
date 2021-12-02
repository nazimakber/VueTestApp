
<template>
  <div id="data-grid">
    <DxDataGrid
      :data-source="clientData"
      :show-borders="true"
      key-expr="_id"
    >
      <DxPaging :enabled="false"/>
      <DxEditing
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
        mode="popup"
      >
        <DxPopup
          :show-title="true"
          :width="500"
          :height="400"
           title="New / Edit Client"
        />
        <DxForm>
          <DxItem
            :col-count="1"
            :col-span="1"
            item-type="group"
          >
            <DxItem data-field="name" :col-span="2"/>
            <DxItem data-field="email" :col-span="2"/>
            <DxItem data-field="phone" :col-span="2"/>
            <DxItem data-field="providers" editor-type="DxDropDownBox" />
          </DxItem>
        </DxForm>
      </DxEditing>

      <DxColumn data-field="_id" :visible="false"/>
      <DxColumn data-field="name" caption="Name" :width="150"/>
      <DxColumn data-field="email" caption="Email" :width="200"/>
      <DxColumn data-field="phone" caption="Phone" :width="100"/>
      <DxColumn data-field="date" data-type="date" :visible="false" />
      <DxColumn
        :width="250"
        caption="Providers"
        data-field="providerFormat"
      ></DxColumn>
       <DxColumn
        caption="Providers"
        data-field="providers"
        :visible="false" >
         <!-- <DxLookup
          :data-source="providerData"
          value-expr="id"
          display-expr="name"
        >
         <DxSelection mode="multiple"/>
         <DxFilterRow :visible="true"/>
         <DxScrolling mode="virtual"/>
        </DxLookup> -->


      <DxDropDownBox
          v-model:value="gridBoxValue"
          :defer-rendering="false"
          :show-clear-button="true"
          :data-source="providerData"
          display-expr="name"
          value-expr="id"
          placeholder="Select a value...">
          <template #content="{ data }">
            <DxDataGrid
              :data-source="providerData"
              :columns="['id','name']"
              :hover-state-enabled="true"
              v-model:selected-row-keys="gridBoxValue"
            >
              <DxSelection mode="multiple"/>
              <DxPaging
                :enabled="true"
                :page-size="10"
              />
              <DxFilterRow :visible="true"/>
              <DxScrolling mode="virtual"/>

            </DxDataGrid>
          </template>
        </DxDropDownBox>
      </DxColumn>
    </DxDataGrid>

    <div class="dx-field-value">
      <DxDropDownBox
          v-model:value="gridBoxValue"
          :defer-rendering="false"
          :show-clear-button="true"
          :data-source="providerData"
          display-expr="name"
          value-expr="id"
          placeholder="Select a value...">
          <template #content="{ data }">
            <DxDataGrid
              :data-source="providerData"
              :columns="['id','name']"
              :hover-state-enabled="true"
              v-model:selected-row-keys="gridBoxValue"
            >
              <DxSelection mode="multiple"/>
              <DxPaging
                :enabled="true"
                :page-size="10"
              />
              <DxFilterRow :visible="true"/>
              <DxScrolling mode="virtual"/>

            </DxDataGrid>
          </template>
        </DxDropDownBox>
      </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import {
    DxDataGrid,
    DxSelection,
    DxFilterRow,
    DxScrolling,
    DxColumn,
    DxPaging,
    DxEditing,
    DxPopup,
    DxLookup,
    DxForm} from "devextreme-vue/data-grid";
import { DxTextArea } from 'devextreme-vue/text-area';
import DxDropDownBox from 'devextreme-vue/drop-down-box';
import { DxItem } from 'devextreme-vue/form';
import { mapGetters } from "vuex";

/** Mount function of this component. Called when component is mounted. */
function mounted() {
  this.getProviders();
  this.gridBoxValue = [1,5,3];
  this.getClients();
}


function getClients() {
      this.$store.commit("setLoading", true);
      this.$store.dispatch("getClients").then((data) => {
        data.forEach(element => {
          var providersArray = [];
          element.providerFormat ="";
          element.providers.forEach(pr =>{
            element.providerFormat += this.providerData.find(x => x.id == pr.id).name + ", ";
             providersArray.push(pr.id);
          });
              element.providerFormat = element.providerFormat.substring(0, element.providerFormat.length - 2);
              element.providersArray = providersArray;
        });
        this.clientData = data;
      this.$store.commit("setLoading", false);
    },
    err => {
      console.log(err);
      this.$store.commit("setLoading", false);
    }
  );
}

function getProviders() {
      this.$store.commit("setLoading", true);
      this.$store.dispatch("getProviders").then((data) => {
        this.providerData = data;
      this.$store.commit("setLoading", false);
    },
    err => {
      console.log(err);
      this.$store.commit("setLoading", false);
    }
  );
}

const computed = {
  ...mapGetters(["isLoading"])
}

const methods = {
  getClients,
  getProviders
};

const components = {
    DxDataGrid,
    DxLookup,
    DxPaging,
    DxEditing,
    DxPopup,
    DxForm,
    DxItem,
    DxTextArea,
    DxColumn,
    DxDropDownBox,
    DxSelection,
    DxFilterRow,
    DxScrolling
}

export default {
  name: 'Client',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        clientData : {},
        providerData: {},
        gridBoxValue: [1,3,5],
        clientRecord: {},
        providerFormats:{}
      }
    },
    mounted,
    computed,
    methods,
    components
}
</script>

<style scoped>
#data-grid {
  min-height: 700px;
}

.dx-fieldset {
  height: 400px;
}
</style>
