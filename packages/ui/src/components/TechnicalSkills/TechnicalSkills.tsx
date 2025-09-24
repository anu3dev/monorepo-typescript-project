import React from 'react';
import './TechnicalSkills.scss';

interface SkillItem {
  name: string;
  isLearning?: boolean;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

interface TechnicalSkillsProps {
  categories: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  categories,
}) => {
  return (
    <div className="technical-skills">
      <h3 className="skills-title">Technical Skills</h3>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4 className="category-title">{category.title}</h4>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`skill-item ${skill.isLearning ? 'learning' : ''}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
