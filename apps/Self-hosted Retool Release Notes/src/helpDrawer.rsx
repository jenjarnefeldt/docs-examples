<DrawerFrame id="helpDrawer" footerPadding="8px 12px" headerPadding="8px 12px" hidden={true} hideOnEscape={true} isHiddenOnMobile={true} overlayInteraction={true} padding="8px 12px" showHeader={true} showOverlay={true} width="medium"><Header><Text id="drawerTitle1" value="### Help" verticalAlign="center" />
<Button id="drawerCloseButton1" ariaLabel="Close" horizontalAlign="right" iconBefore="bold/interface-delete-1" style={{"ordered":[{"border":"transparent"}]}} styleVariant="outline"><Event event="click" method="setHidden" params={{"ordered":[{"hidden":true}]}} pluginId="helpDrawer" type="widget" waitMs="0" waitType="debounce" /></Button></Header>
<Body><Text id="text2" style={{"ordered":[]}} value="This Retool app provides detailed release notes for [self-hosted Retool](https://retool.com/self-hosted). Select any two release versions to view a complete list of all changes{{ channelSelect.value === 'stable' ? ', grouped by **Major** and **Incremental**' : '' }}.

- Click **PDF** to download a PDF version of these changes.
- Click **Share** to copy a link for the current version comparison.

#### Release versions

Releases use [semantic versioning](https://semver.org) and the channel using the format `MAJOR.MINOR.PATCH-CHANNEL`.

- `MAJOR.MINOR` refers to the release (e.g., `{{ latestVersion.selectedItem.version }}`).
- `MAJOR.MINOR.PATCH` refers to a specific version of the release (e.g., `{{ latestVersion.value }}`).
- `CHANNEL` refers to the release channel, (e.g., `{{ channelSelect.value }}`).

Whether you deploy self-hosted Retool or upgrade an existing deployment, you reference the specific release version using `MAJOR.MINOR.PATCH-CHANNEL`.  Refer to the [upgrade best practices](https://docs.retool.com/self-hosted/concepts/update-deployment) guide for more information.

{{ channelSelect.value === 'stable' ? 'Retool releases `PATCH` version updates for stable releases with incremental changes, such as bug fixes (e.g., `3.47.2-stable`).' : 'Edge releases occur weekly and do not receive subsequent patch updates.' }}" verticalAlign="center" />
<Text id="text4" hidden="{{ channelSelect.value === 'edge' }}" style={{"ordered":[]}} value="#### Major changes

These are significant changes in this release, such as new features and functionality. Major changes are introduced in the first patch release version and included in all future patch release versions.

Click the **More Info** action button to view more details about major changes.

Major changes are categorized using the following types:" verticalAlign="center" />
<TagsWidget2 id="tags3" allowWrap={true} colorByIndex="{{ item.color }}" data="{{ changeTypes.value }}" hiddenByIndex="{{ !item.major }}" labels="{{ item.label }}" tooltipByIndex="{{ item.caption }}" values="{{ item.value }}" />
<Text id="text5" style={{"ordered":[]}} value="#### Incremental changes

These are minor changes, such as bug fixes and improvements. Incremental changes are introduced in a specific patch release version.

Click the **Dockerhub** action button to view the relevant release version on Dockerhub.

Incremental changes are categorized using the following types:" verticalAlign="center" />
<TagsWidget2 id="tags4" allowWrap={true} colorByIndex="{{ item.color }}" data="{{ changeTypes.value }}" hiddenByIndex="{{ item.major }}" labels="{{ item.label }}" tooltipByIndex="{{ item.caption }}" values="{{ item.value }}" /></Body></DrawerFrame>