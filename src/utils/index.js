/* eslint-disable */
mapDBToModel = ({ id, title, body, tags, created_at, updated_at }) => ({
  id,
  title,
  body,
  tags,
  createtedAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
