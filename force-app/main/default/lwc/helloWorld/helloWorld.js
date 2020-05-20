import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
      this.greeting = event.target.value;
    }


      /**
       * @track indicates that if this object changes,
       * the UI should update to reflect those changes.
       */
      @track
      title = 'Welcome to Lightning Web Components Playground!';
  
      @track
      showFeatures = true;

      handleClick(event) {
        this.showFeatures = !this.showFeatures;
      }
      /**
       * Getter for the features property
       */
      get features() {
          return [
              {
                  title: 'edit title',
                  label: 'Edit the name and description of your component.',
                  icon: 'utility:edit',
              },
              {
                  title: 'save title',
                  label:
                      'Create permanent, shareable URLs that anyone can view within your org.',
                  icon: 'utility:save',
              },
              {
                  title: 'refresh title',
                  label: 'View changes to code instantly with Live Compilation.',
                  icon: 'utility:refresh',
              },
              {
                  title: 'brush title',
                  label: 'Style your components with SLDS.',
                  icon: 'utility:brush',
              },
              {
                  title: 'download title',
                  label: 'Download and upload components as zip files.',
                  icon: 'utility:download',
              },
          ];
      }
  }
    