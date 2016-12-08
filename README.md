
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


## Support & Documentation

Cocoon Documentation -- Visit for the project documentation -- https://github.com/nathanvda/cocoon 
Cloud9 -- Visit for your own easy to clone environment -- http://docs.c9.io 
Working demo of Cocoon with SLIM -- Visit https://github.com/nathanvda/cocoon_simple_form_demo

## Directions

Access the git repo you want
Fork it
Clone it to cloud9
Run Project
Default route is set to continent, so just click edit to begin playing

## Notes

- Have bloated scaffolds in place still to check data - just incase

## Gotcha's 

- 'nested-fields' by default has to be used in each nested partial (not the top level)
- A second div of with any name wrapping the form/partial being setup 
- ... is not optional.
- Cocoon documents that "link_to_remove_association" must also have a div 
- Cocoon documents that all partials should be  '<>_fields.<>' - ....
- ... https://github.com/nathanvda/cocoon#link_to_remove_association
- Strong parameters in the controllers - using nested format ...
- ... <modelname>_attributes: [:id, :name, :_destroy, <further nesting?>] ...
- ...https://github.com/nathanvda/cocoon#strong-parameters-gotcha