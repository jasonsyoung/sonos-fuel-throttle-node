define( function( require ) {
    var Backbone = require( 'backbone' );
    var Config = require( 'config' );
    var dashboardTemplate = require( 'tmpl!templates/dashboard.html' );

    return Backbone.View.extend({
        initialize: function() {
            _.bindAll( this );

            // TODO: Example bind loading of collection fetch success to this view's render
            this.el = $('#sonos-fuel-throttle-node-DashboardMain');
            this.render();
        },

        clean: function() {
        },

        render: function() {
            $('#sonos-fuel-throttle-node-Loading').remove();

            var templateObj = {
                appDisplayName: 'ExactTarget Integration',
                mainMarketingMessage: 'Super Cool Marketing Message!'
            };

            $(this.el).html( dashboardTemplate( templateObj ) );
        }
    });
});
