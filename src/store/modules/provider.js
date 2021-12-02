/* eslint-disable */
import { apiService } from "../../services/api";

// Retrun all clients
function getProviders() {
    return new Promise((resolve, reject) => {
        apiService.get("provider").then(({ data }) => {
          resolve(data);
        }).catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


  /**
 * Returns Provider by id
 * @param {object} _
 * @param {string} providerid - provider Id
 */

   function getProvider(_, providerid) {
    return new Promise((resolve, reject) => {
      apiService.query("provider/", {
          params: { providerid: providerid }
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


  /**
 * Adds Provider
 * @param {object} _
 * @param {object} params - Params
 */
function addProvider(_, params) {
    return new Promise((resolve, reject) => {
      apiService.post("providerid/", params)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }


/**
 * Removes Provider
 * @param {object} _
 * @param {string} providerid
 */
 function removeProvider(_, providerid) {
    return new Promise((resolve, reject) => {
      apiService
        .delete("providerid/" + providerid)
        .then(({ data }) => {
          resolve(data.results);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }



  /**
 * Remove provider
 * @param {object} _
 * @param {string} _id
 */
   function updateProvider(_, params) {
    return new Promise((resolve, reject) => {
      apiService
        .patch("provider/"+ params._id, params.data)
        .then(({ data }) => {
          resolve(data.results);
        })
        .catch(({ response }) => {
          reject(parseErrorResponse(response));
        });
    });
  }

const state = {};

const actions = {
  getProviders,
  getProvider,
  addProvider,
  removeProvider,
  updateProvider
};

const mutations = {};

export default {
  state,
  actions,
  mutations
};