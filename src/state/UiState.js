import { observable, computed } from 'mobx';

class UiState {
    @observable active_license;
    @observable role_selection;
    @observable role_confirmation;
    @observable tax_id_ssn;
    @observable individual_company;
    @observable confirmation;
    @observable applicable_entity;

    @computed get question2Visible() {
        return this.active_license;
    }
}

export default new UiState();