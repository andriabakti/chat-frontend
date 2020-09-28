<template>
    <div>
        <GmapMap
            :center="{lat:location.lat, lng:location.lng}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        >
        </GmapMap>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    location: {
      lat: -1.7286384,
      lng: 103.2693485
    }
  }),
  mounted () {
    this.$getLocation()
      .then(coordinates => {
        this.location.lat = coordinates.lat
        this.location.lng = coordinates.lng
      })
  }
}
</script>

<style scoped>

</style>
