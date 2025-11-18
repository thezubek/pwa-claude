<template>
  <div class="feature-flags-admin">
    <div class="header">
      <h2>Feature Flags Admin</h2>
      <button @click="clearAllOverrides" class="btn-clear">Clear All Overrides</button>
    </div>

    <div class="context-info">
      <h3>Context</h3>
      <div class="context-details">
        <div><strong>Environment:</strong> {{ context.environment }}</div>
        <div><strong>User ID:</strong> {{ context.userId || 'Not set' }}</div>
        <div><strong>Segments:</strong> {{ (context.userSegments || []).join(', ') || 'None' }}</div>
      </div>
    </div>

    <div class="filters">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search flags..."
        class="search-input"
      />
      <select v-model="selectedTag" class="tag-select">
        <option value="">All Tags</option>
        <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
      </select>
    </div>

    <div class="flags-list">
      <div
        v-for="flag in filteredFlags"
        :key="flag.key"
        class="flag-item"
        :class="{ 'flag-enabled': evaluation[flag.key]?.enabled }"
      >
        <div class="flag-header">
          <div class="flag-info">
            <h4>{{ flag.name }}</h4>
            <p class="flag-description">{{ flag.description }}</p>
            <div class="flag-meta">
              <span v-if="flag.tags" class="tags">
                <span v-for="tag in flag.tags" :key="tag" class="tag">{{ tag }}</span>
              </span>
              <span v-if="flag.rolloutPercentage !== undefined" class="rollout">
                Rollout: {{ flag.rolloutPercentage }}%
              </span>
              <span v-if="flag.environments" class="environments">
                Envs: {{ flag.environments.join(', ') }}
              </span>
            </div>
          </div>
          <div class="flag-controls">
            <div class="evaluation">
              <span class="status" :class="evaluation[flag.key]?.enabled ? 'enabled' : 'disabled'">
                {{ evaluation[flag.key]?.enabled ? 'ENABLED' : 'DISABLED' }}
              </span>
              <span class="reason">{{ evaluation[flag.key]?.reason }}</span>
            </div>
            <div class="toggle">
              <label class="switch">
                <input
                  type="checkbox"
                  :checked="overrides[flag.key] !== undefined ? overrides[flag.key] : flag.enabled"
                  @change="toggleOverride(flag.key, $event)"
                />
                <span class="slider"></span>
              </label>
              <button
                v-if="overrides[flag.key] !== undefined"
                @click="clearOverride(flag.key)"
                class="btn-reset"
                title="Clear override"
              >
                ↻
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats">
      <div class="stat">
        <strong>Total Flags:</strong> {{ Object.keys(flags).length }}
      </div>
      <div class="stat">
        <strong>Enabled:</strong> {{ enabledCount }}
      </div>
      <div class="stat">
        <strong>Overrides:</strong> {{ Object.keys(overrides).length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  flags,
  overrides,
  context,
  getAllFlags,
  getEvaluation,
  setOverride,
  clearOverride: clearOverrideComposable,
  clearAllOverrides: clearAllOverridesComposable,
} = useFeatureFlags()

const searchQuery = ref('')
const selectedTag = ref('')

// Compute evaluation for all flags
const evaluation = computed(() => {
  const result: Record<string, any> = {}
  Object.keys(flags.value).forEach((key) => {
    result[key] = getEvaluation(key)
  })
  return result
})

// Get unique tags
const tags = computed(() => {
  const allTags = new Set<string>()
  Object.values(flags.value).forEach((flag) => {
    flag.tags?.forEach((tag) => allTags.add(tag))
  })
  return Array.from(allTags).sort()
})

// Filter flags
const filteredFlags = computed(() => {
  let result = Object.values(flags.value)

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(
      (flag) =>
        flag.name.toLowerCase().includes(query) ||
        flag.description.toLowerCase().includes(query) ||
        flag.key.toLowerCase().includes(query),
    )
  }

  // Filter by tag
  if (selectedTag.value) {
    result = result.filter((flag) => flag.tags?.includes(selectedTag.value))
  }

  return result
})

// Count enabled flags
const enabledCount = computed(() => {
  return Object.keys(flags.value).filter((key) => evaluation.value[key]?.enabled).length
})

function toggleOverride(key: string, event: Event) {
  const checkbox = event.target as HTMLInputElement
  setOverride(key, checkbox.checked)
}

function clearOverride(key: string) {
  clearOverrideComposable(key)
}

function clearAllOverrides() {
  if (confirm('Clear all feature flag overrides?')) {
    clearAllOverridesComposable()
  }
}
</script>

<style scoped>
.feature-flags-admin {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.btn-clear {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-clear:hover {
  background: #dc2626;
}

.context-info {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.context-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.context-details div {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.search-input,
.tag-select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
}

.search-input {
  flex: 1;
}

.tag-select {
  min-width: 150px;
}

.flags-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.flag-item {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.2s;
}

.flag-item.flag-enabled {
  border-color: #10b981;
}

.flag-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
}

.flag-info {
  flex: 1;
}

.flag-info h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.flag-description {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 0.875rem;
}

.flag-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.tags {
  display: flex;
  gap: 0.25rem;
}

.tag {
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}

.rollout,
.environments {
  color: #6b7280;
}

.flag-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.evaluation {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.status {
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.status.enabled {
  background: #d1fae5;
  color: #065f46;
}

.status.disabled {
  background: #fee2e2;
  color: #991b1b;
}

.reason {
  font-size: 0.625rem;
  color: #9ca3af;
}

.toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #10b981;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.btn-reset {
  padding: 0.25rem 0.5rem;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-reset:hover {
  background: #e5e7eb;
}

.stats {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  font-size: 0.875rem;
}

.stat {
  display: flex;
  gap: 0.5rem;
}
</style>
