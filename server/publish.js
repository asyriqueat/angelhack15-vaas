Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {'email': 1}});
});