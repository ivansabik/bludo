FlowRouter.route("/", {
  name: "welcome",
  action() {
    ReactLayout.render(LayoutMain, {
      content: <Welcome />
    });
  }
});
FlowRouter.route("/donor", {
  name: "donor main",
  action() {
    ReactLayout.render(LayoutMain, {
      content: <DonorMap />
    });
  }
});
FlowRouter.route("/posting/new", {
  name: "newPosting",
  action() {
    ReactLayout.render(LayoutMain, {
      content: <PostingNew />
    });
  }
});