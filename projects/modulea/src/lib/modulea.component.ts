import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-modulea',
    template: `
  <form>
  <section class="form-block">
      <label> {{title}} </label>
      <div class="form-group">
          <label for="formFields_1">Textbox [type="text"]</label>
          <input type="text" id="formFields_1" placeholder="Email" size="35" disabled>
          <input type="text" id="formFields_2" placeholder="Email 2" size="45">
          <input type="text" id="formFields_3" placeholder="Email" size="25">
          <input type="text" id="formFields_4" placeholder="Email 2">
          <input type="text" id="formFields_5" placeholder="Email">
          <input type="text" id="formFields_6" placeholder="Email 2">
      </div>
      <div class="form-group">
          <label for="formFields_7">Textbox [type="password"]</label>
          <input type="password" id="formFields_7" placeholder="Password">
      </div>
      <div class="form-group">
          <label for="formFields_8">Textarea</label>
          <textarea id="formFields_8" rows="5"></textarea>
      </div>
      <div class="form-group">
          <label for="formFields_9">Textbox [type="url"]</label>
          <input type="url" id="formFields_9" placeholder="https://vmware.github.io/clarity/" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_10">Textbox [type="tel"]</label>
          <input type="tel" id="formFields_10" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_11">Textbox [type="date"]</label>
          <input type="date" id="formFields_11" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_12">Textbox [type="datetime-local"]</label>
          <input type="datetime-local" id="formFields_12" size="35">
      </div>
      <div class="form-group">
          <label for="formFields_13">Textbox Readonly [type="text"]</label>
          <input type="text" id="formFields_13" size="35" readonly value="Readonly Text">
      </div>
  </section>
</form>  
  
  `,
    styles: []
})
export class ModuleaComponent implements OnInit {
    title = 'Account Setting';
    constructor() { }

    ngOnInit() {
    }

}
