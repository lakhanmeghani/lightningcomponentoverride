({
    savecontact: function(component, event, helper) {
        var newcon = component.get("v.newContact");
        var action = component.get("c.save");
        action.setParams({ 
            "con": newcon
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
                alert("success");
            }
            else
            {
                alert("Failed");
            }
        });
        $A.enqueueAction(action)
    }})
