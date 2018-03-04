export const skillTooltip = (skill, idx) => (
  `
    <div class="skills-list-box">
      <li id="li-${skill.skill_uuid}" class="skills-li">
        <ul class="skills-details">
          <div class="skill-flex-1">
            <li>rank #${idx + 1}</li>
            <li>${skill.skill_name}</li>
          </div>
          <div class="skill-flex-2">
            <li>${skill.description}</li>
          </div>
          <div class="skills-scores skill-flex-3">
            <div class="skills-imp">
              <li>importance</li>
              <li>${skill.importance}</li>
            </div>
            <div class="skills-lvl">
              <li>level</li>
              <li>${skill.level}</li>
            </div>
          </div>
        </ul>
      </li>
    </div>
  `
);